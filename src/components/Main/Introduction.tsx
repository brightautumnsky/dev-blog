import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const Background = styled.div`
  width: 100%;
  box-shadow: 0 5px 7px -5px #d8d8d8;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10%;
  height: 170px;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 130px;
  }
`

const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 400;
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 27px;
  font-weight: 700;
  color: black;
  span {
    font-size: 16px;
    color: lightgray;
  }
`

const Introduction: FunctionComponent = function () {
  return (
    <Background>
      <Wrapper>
        <div>
          <SubTitle>🏋️‍♀️💪</SubTitle>
          <Title>개발 기록 일지</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction
