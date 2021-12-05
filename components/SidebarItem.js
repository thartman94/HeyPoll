import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../firebase/clientApp";
import { collection } from "@firebase/firestore";

const SidebarItem = ({ title, id }) => {
  const [questions, isQuestionsLoading, questionsError] = useCollectionData(
    collection(db, "savedPolls", id, "pollQuestions"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <li>
      <p>{title}</p>
      <ul>
        {!isQuestionsLoading &&
          questions.map((question, i) => <li key={i}>{question.question}</li>)}
      </ul>
    </li>
  );
};

export default SidebarItem;
