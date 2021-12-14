import React, { useState, useContext, useEffect, useRef } from "react";
import AnimateHeight from "react-animate-height";
import {
  useCollectionData,
  useCollection,
} from "react-firebase-hooks/firestore";
import {
  collection,
  deleteDoc,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  query,
  orderBy,
  increment,
} from "@firebase/firestore";
import { db } from "../firebase/clientApp";
import AppContext from "./AppContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faTrashAlt,
  faPlusSquare,
  faEdit,
  faSave,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

// const savePollTitle = (newPollTitle) => {
// 	console.log(newPollTitle);
// 	updateDoc(doc(db, "savedPolls", id), {
// 		title: newPollTitle,
// 	});
// };

const SidebarItem = ({ title, id }) => {
  const { slideIndex, setSlideIndex, currentPollID, setCurrentPollID } =
    useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const questionColRef = collection(db, "savedPolls", id, "pollQuestions");
  const [questions, isQuestionsLoading, questionsError] = useCollection(
    query(questionColRef, orderBy("order")),

    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const firstUpdate = useRef(true);

  let scollTime = isQuestionsLoading
    ? 0
    : questions.docs.length > 7
    ? 700
    : questions.docs.length * 100;

  return (
    <li className={`sidebarItem ${isOpen && "open"}`}>
      <button
        className={`sidebarItem__title ${isOpen && "open"}`}
        onClick={() => {
          !isEdit && setIsOpen(!isOpen);
        }}
      >
        <div className="wrapper">
          <input
            className={`text ${isEdit ? "active" : "locked"}`}
            readOnly={!isEdit}
            value={isEdit ? null : title}
            placeholder={title}
          />

          <FontAwesomeIcon
            className={`chevron ${isOpen && "rotate"}`}
            icon={faChevronDown}
          />
        </div>
        <div className={`sidebarItem__title--actions ${isEdit && "hold-open"}`}>
          <button
            className={`edit ${isEdit && "green"}`}
            onClick={(e) => {
              e.stopPropagation();
              if (isEdit) {
                const currentValue = e.target
                  .closest(".sidebarItem__title")
                  .querySelector(".text").value;
                const newTitle = currentValue ? currentValue : title;
                updateDoc(doc(db, "savedPolls", id), {
                  title: newTitle,
                });
              }
              setIsEdit(!isEdit);
            }}
          >
            <FontAwesomeIcon icon={isEdit ? faSave : faEdit} />
          </button>
          <button
            className="trash"
            onClick={(e) => {
              e.stopPropagation();
              deleteDoc(doc(db, "savedPolls", id));
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </button>

      <AnimateHeight duration={scollTime} height={isOpen ? "auto" : 0}>
        <ul className={`sidebarItem__questions  ${isOpen && "open"}`}>
          {!isQuestionsLoading &&
            questions.docs.map((question, i) => {
              return (
                <li
                  className={`sidebarItem__questions--single ${
                    slideIndex === i && currentPollID === id && "active"
                  }`}
                  key={i}
                  onClick={() => {
                    setCurrentPollID(id);
                    setSlideIndex(i);
                    console.log(currentPollID, slideIndex);
                  }}
                >
                  {question.data().question}
                  <button
                    className="trash"
                    onClick={async (e) => {
                      e.stopPropagation();
                      const currentQuestionOrder = question.data().order;
                      questions.forEach((doci) => {
                        if (doci.data().order > currentQuestionOrder) {
                          const docRef = doc(
                            db,
                            "savedPolls",
                            id,
                            "pollQuestions",
                            doci.id
                          );
                          updateDoc(docRef, { order: increment(-1) });
                        }
                      });
                      await deleteDoc(
                        doc(db, "savedPolls", id, "pollQuestions", question.id)
                      );
                      const docs = await getDocs(
                        collection(db, "savedPolls", id, "pollQuestions")
                      );

                      if (!docs || docs.size === 0) {
                        deleteDoc(doc(db, "savedPolls", id));
                        setCurrentPollID(null);
                      } else if (slideIndex >= docs.size) {
                        setSlideIndex(slideIndex - 1);
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </li>
              );
            })}
        </ul>
        <button
          className="sidebarItem__add"
          onClick={() => {
            console.log("clicked");
            addDoc(collection(db, "savedPolls", id, "pollQuestions"), {
              question: "My new question",
              answers: ["yes", "no"],
              order: questions.docs.length,
            });
          }}
        >
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
      </AnimateHeight>
    </li>
  );
};

export default SidebarItem;
