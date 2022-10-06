import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BodyStyled } from "../styledcomponents/bodyStyle";
import { Button, ButtonStyle } from "../styledcomponents/buttondiv";
import { InnerDived } from "../styledcomponents/InnerDiv";
import { Styledlabel } from "../styledcomponents/labelStyle";
import { InputDiv } from "../styledcomponents/buttondiv";
import { InputContainer } from "../styledcomponents/InnerDiv";

import  "../table.css"
import {
  calculateGrandTotal,
  updateExam,
  updateName,
  updateAssesment,
  updateTest,
  calculateTotalAssesment,
  calculateAverage,
} from "../slicecomponents/basicFour";
import { useSelector } from "react-redux";
const Body = () => {
  const dispatch = useDispatch();
  const add = useSelector((state) => state.basic4.value);
  const [name, setName] = useState("");
  const [ass1, setAss1] = useState(0);
  const [ass2, setAss2] = useState(0);
  const [ass3, setAss3] = useState(0);
  const [ass4, setAss4] = useState(0);
  const [ass5, setAss5] = useState(0);
  const [test1, setTest1] = useState(0);
  const [test2, setTest2] = useState(0);
  const [exam, setExam] = useState(0);
  //const As1 = Number(ass1) || 0;
  // const As2 = Number(ass2) || 0;
  // const As3 = Number(ass3) || 0;
  // const As4 = Number(ass4) || 0;
  // const As5 = Number(ass5) || 0;
  // const Tes1 = Number(test1) || 0;
  // const Tes2 = Number(test2) || 0;
  // const Exam = Number(exam) || 0;
  return (
    <BodyStyled>
      <InnerDived>
        <Styledlabel>Name:</Styledlabel>

        <Styledlabel>Assmt1:</Styledlabel>

        <Styledlabel>Assmt2:</Styledlabel>

        <Styledlabel>Assmt3:</Styledlabel>

        <Styledlabel>Assmt4:</Styledlabel>

        <Styledlabel>Assmt5:</Styledlabel>

        <Styledlabel>Average:</Styledlabel>

        <Styledlabel>Test1:</Styledlabel>

        <Styledlabel>Test2:</Styledlabel>

        <Styledlabel>TotalAssesment:</Styledlabel>

        <Styledlabel>Exam:</Styledlabel>

        <Styledlabel>GrandTotal:</Styledlabel>
      </InnerDived>
      <InputContainer>
        <InputDiv
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <InputDiv
          type="text"
          value={ass1}
          placeholder="ass1"
          onChange={(e) => setAss1(e.target.value)}
        />
        <InputDiv
          type="text"
          value={ass2}
          placeholder="ass2"
          onChange={(e) => setAss2(e.target.value)}
        />
        <InputDiv
          type="text"
          value={ass3}
          placeholder="ass3"
          onChange={(e) => setAss3(e.target.value)}
        />
        <InputDiv
          type="text"
          value={ass4}
          placeholder="ass4"
          onChange={(e) => setAss4(e.target.value)}
        />
        <InputDiv
          type="text"
          value={ass5}
          placeholder="ass5"
          onChange={(e) => setAss5(e.target.value)}
        />
        <InputDiv type="text" value={add.average} />
        <InputDiv
          type="text"
          value={test1}
          placeholder="test1"
          onChange={(e) => setTest1(e.target.value)}
        />
        <InputDiv
          type="text"
          value={test2}
          placeholder="test2"
          onChange={(e) => setTest2(e.target.value)}
        />
        <InputDiv type="text" value={add.totalAssesment} />
        <InputDiv
          type="text"
          value={exam}
          placeholder="exam"
          onChange={(e) => setExam(e.target.value)}
        />
        <InputDiv type="text" value={add.grandTotal} />
      </InputContainer>
      <Button>
        <ButtonStyle onClick={() => dispatch(updateName({ name }))}>
          UpdateName
        </ButtonStyle>
        <ButtonStyle
          onClick={() => dispatch(updateTest({ test1, test2 }))}
        >
          UpdateTest
        </ButtonStyle>
        <ButtonStyle
          onClick={() =>
            dispatch(calculateTotalAssesment({ test1, test2 }))
          }
        >
          CalculateTotalAssesment
        </ButtonStyle>
        <ButtonStyle
          onClick={() =>
            dispatch(
              updateAssesment({
              
                ass2,
                ass3, 
                ass4, 
                ass5, 
              })
            )
          }
        >
          UpdateAssesment
        </ButtonStyle>
        <ButtonStyle
          onClick={() =>
            dispatch(
              calculateAverage({
                ass1,
                ass2,
                ass3,
                ass4,
                ass5,
              })
            )
          }
        >
          CalculateAverage
        </ButtonStyle>
        <ButtonStyle onClick={() => dispatch(updateExam({ exam }))}>
          UpdateExam
        </ButtonStyle>
        <ButtonStyle onClick={() => dispatch(calculateGrandTotal())}>
          CalculateGrandTotal
        </ButtonStyle>
      </Button>
      <div>
      <table className="tab">
        <tr>
          <th>Name</th>
          <th>TotalAssesment</th>
          <th>Average</th>
          <th>Test1</th>
          <th>Test2</th>
          <th>Exam</th>
          <th>GrandTotal</th>
          <th>Grade</th>
        </tr>
        <tr>
          <td>{add.name}</td>
          <td>{add.totalAssesment}</td>
          <td>{add.average}</td>
          <td>{add.test1}</td>
          <td>{add.test2}</td>
          <td>{add.exam}</td>
          <td>{add.grandTotal}</td>
          <td>{add.grade}</td>
        </tr>
      </table>
      </div>
    </BodyStyled>
  );
};

export default Body;
