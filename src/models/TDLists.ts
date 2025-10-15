import { magnetar } from "../initMagnetar.ts";
import { Timestamp } from "firebase/firestore";

export interface TDList {
  UID: string;
  completed: boolean;
  createdAt: Date | Timestamp;
  updatedAt: Date | Timestamp;
  text: string;
}

// Firestoreのコレクションを定義
export const TDLists = magnetar.collection<TDList>("TDLists", {
  modifyReadResponseOn: {
    added: (data) => {
      // FirestoreのTimestampをDateに変換
      if (data.createdAt instanceof Timestamp) {
        data.createdAt = data.createdAt.toDate();
      }
      // FirestoreのTimestampをDateに変換
      if (data.updatedAt instanceof Timestamp) {
        data.updatedAt = data.updatedAt.toDate();
      }
      return data;
    },
    modified: (data) => {
      // FirestoreのTimestampをDateに変換
      if (data.createdAt instanceof Timestamp) {
        data.createdAt = data.createdAt.toDate();
      }
      // FirestoreのTimestampをDateに変換
      if (data.updatedAt instanceof Timestamp) {
        data.updatedAt = data.updatedAt.toDate();
      }
      return data;
    },
  },
});
