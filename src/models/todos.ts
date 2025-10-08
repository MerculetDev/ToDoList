import { magnetar } from '../initMagnetar.js'
import { Timestamp } from 'firebase/firestore'

// ToDo の型定義
export interface Todo {
  title: string
  createdAt: Date | Timestamp
}

// データベースにコメントを追加する際にコメントを送信した時間情報を追加して更新
export const todos = magnetar
  .collection<Todo>('todos', {
    modifyReadResponseOn: {
      added: (data) => {
        if (data.createdAt instanceof Timestamp) {
            data.createdAt = data.createdAt.toDate()
        }
        return data
      },
    }
  })



