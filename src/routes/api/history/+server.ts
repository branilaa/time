import { json, error } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { history } from '$db'
import { ObjectId } from 'mongodb'
import { marked } from 'marked'

export const GET: RequestHandler = async () => {
  return json(await history.find().toArray())
}

export const POST: RequestHandler = async ({ request, locals }) => {
  if (!locals.user) {
    return error(401, 'Unauthorized')
  }

  let { title, description, content } = await request.json()

  if (!title || !description || !content) {
    return error(400, 'Bad request: missing fields')
  }

  content = await marked.parse(content)

  await history.insertOne({ title, description, content })

  return json({ message: 'ok' })
}

export const DELETE: RequestHandler = async ({ request, locals }) => {
  if (!locals.user) {
    return error(401, 'Unauthorized')
  }

  const { id } = await request.json()
  
  if (!id) {
    return error(400, 'Bad request: missing fields')
  }

  const articleId = new ObjectId(id)

  if (!await history.findOne({ _id: articleId })) {
    return error(404, 'Cannot delete non-existing article')
  }

  await history.deleteOne({ _id: articleId })

  return json({ message: 'ok' })
}

export const PUT: RequestHandler = async ({ request, locals }) => {
  if (!locals.user) {
    return error(401, 'Unauthorized')
  }

  let { id, title, description, content } = await request.json()
  
  if (!id || !title || !description || !content) {
    return error(400, 'Bad request: missing fields')
  }

  const articleId = new ObjectId(id)

  if (!await history.findOne({ _id: articleId })) {
    return error(404, 'Cannot update non-existing article')
  }
  
  content = await marked.parse(content)
  
  await history.updateOne({ _id: articleId }, { $set: { title, description, content } })

  return json({ message: 'ok' })
}