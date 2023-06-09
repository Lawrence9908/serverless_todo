import { TodosAccess } from '../dataLayer/todosAcess'
import { AttachmentUtils } from '../dataLayer/attachmentUtils';
import { TodoItem } from '../models/TodoItem'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
// import { createLogger } from '../utils/logger'
import * as uuid from 'uuid'
// import * as createError from 'http-errors'

const todosAccess = new TodosAccess();

const attachmentUtils = new AttachmentUtils();

export async function createTodo(userId: string, todo: CreateTodoRequest): Promise<TodoItem> {
    const todoId = uuid.v4();
    const createdAt = new Date().toISOString();
    const done = false;

    return await todosAccess.createTodo({
        userId,
        todoId,
        createdAt,
        done,
        ...todo
    })
}

export async function deleteTodo(userId: string, todoId: string): Promise<TodoItem> {
    return await todosAccess.deleteTodo(userId, todoId);
}

export async function createAttachmentPresignedUrl(todoId: string, userId: string): Promise<string> {
    await todosAccess.updateAttachmentUrl(todoId, userId);
    return await attachmentUtils.createAttachmentPresignedUrl(todoId);
}

export async function getTodosForUser(userId: string): Promise<TodoItem[]> {
    return await todosAccess.getTodosForUSer(userId);
}

export async function updateTodo(userId: string, todoId: string, updatedTodo: UpdateTodoRequest): Promise<TodoItem> {
    return await todosAccess.updateTodo(userId, todoId, updatedTodo);
}

