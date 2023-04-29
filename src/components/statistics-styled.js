import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 120px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 20px;
`;

export const Title = styled.h2`
  margin-top: 30px;
  margin-bottom: 22px;
  font-size: 30px;
`;

export const List = styled.ul`
  height: 80px;
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  border-radius: 20px;
`;

export const ListItem = styled.li`
  height: 55px;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  list-style: none;
`;

export const ItemTitle1 = styled.span`
  padding: 0;
  margin-top: -20px;
  color: white;
  font-size: 15px;
`;

export const ItemTitle2 = styled.span`
  padding: 0;
  margin-top: 5px;
  color: white;
  font-size: 20px;
`;
