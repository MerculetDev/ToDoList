import { magnetar } from "@/initMagnetar";
import { auth } from "@/initFirebase";
import { genFirebaseRandomId } from "@codelic/datagen";

// Firestoreのドキュメントの型を定義
export type TDList = {
  id: string;
  UID: string | undefined;
  text: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
};

// Firestoreのコレクションを定義
export const TDLists = magnetar.collection<TDList>("TDLists");

// 新しいToDoアイテムを追加
export type ToDoItem = {
  id: string;
  UID: string | undefined;
  text: string;
  completed: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
};

export async function addTodo(item: ToDoItem) {
  // 現在のユーザーのUIDを取得
  const uid = auth.currentUser?.uid;

  // 新しいToDoアイテムを追加
  await TDLists.insert({
    id: genFirebaseRandomId(),
    UID: uid,
    text: item.text,
    completed: item.completed,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

// textの入力値が変更された際の更新処理
export async function updateText(id: string, text: string) {
  await TDLists.doc(id).merge({
    text,
    updatedAt: new Date(),
  });
}

// チェックボックス完了・未完了を切り替え
export async function toggleTodo(id: string, completed: boolean) {
  // 同一のIDを持つドキュメントのcompletedを変更
  await TDLists.doc(id).merge({
    completed: !completed,
    updatedAt: new Date(),
  });
}

// リスト削除
export async function deleteTodo(id: string) {
  await TDLists.doc(id).delete();
}
