import React from "react";
import { CSSIcon, HTMLIcon, JSIcon, ReactIcon, SQLIcon, NoSQLIcon, DynamodbIcon, IconDiv, SectionTitle, GitIcon, AWSIcon } from './styles';


const Badge = () => {

  return (
      <IconDiv>
          <SectionTitle>
            Skills!
          </SectionTitle>
          <HTMLIcon data-hover="HTML"/>
          <CSSIcon data-hover="CSS"/>
          <JSIcon data-hover="Javascript"/>
          <ReactIcon data-hover="React"/>
          <SQLIcon data-hover="MySQL and SQL Databases"/>
          <NoSQLIcon data-hover="Mongodb and NoSQL Databases"/>
          <DynamodbIcon data-hover="DynamoDB Databases"/>
          <GitIcon data-hover="DynamoDB Databases"/>
          <AWSIcon data-hover="DynamoDB Databases"/>
      </IconDiv>

  );
}

export default Badge;