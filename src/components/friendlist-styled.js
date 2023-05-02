import styled from 'styled-components';

export const Item = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  padding: 0;
  width: 400px;
  border-radius: 20px;
`;

export const SubItem = styled.li`
  display: flex;
  align-items: center;
  background-color: white;
  width: 400px;
  height: 100px;
  margin-bottom: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  border-radius: 20px;
`;

export const ItemAvatar = styled.img`
  margin: 0;
  margin-left: 13px;
  width: 90px;
`;

export const StatusOnline = styled.span`
  margin-left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
  margin-left: 13px;
`;

export const StatusOffline = styled.span`
  margin-left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  margin-left: 13px;
`;

export const Name = styled.p`
  margin-left: 13px;
`;
