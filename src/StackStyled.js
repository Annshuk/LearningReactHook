import styled from 'styled-components';

export const Container = styled('div')`
  border: 1px solid grey;
  padding: 15px;
  display:flex;
  width:100%;
`;

export const Row = styled('div')`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom:20px;
`;

export const FormSection = styled('div')`
padding:20px;
width:100%;
`;

export const AddButton = styled('button')`
  border-radius: 10px;
  background-color: transparent;
  font-size: 12px;
  display:flex;
  align-items: center;
  line-height:1;
  padding: 5px 10px;  

  span {
    font-size:20px;
    font-weight:bold;
    padding-right:5px;
  }
`;

export const DeleteButton = styled('button')`
  align-items: center;
  border-radius: 10px;
  background-color: white;
  font-size: 12px;
  width: 60px;
  height: 35px;
`;

export const BulletEditor = styled('h3')`
  background-color:rgb(6, 8, 100);
  color:white;
  font-size: 14px;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ComponentPreview = styled('div')`
  word-wrap: break-word;
  border-radius: 10px;
  border-color: white;
  border-style: solid;
  margin: 10px;
  padding: 10px;
  width: 350px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
`;

export const BulletInput = styled('input')`
  border-radius: 5px;
  height: 40px;
  padding-left: 10px;
  width: 75%;
`;

export const HeadlineInput = styled('input')`
  border-radius: 10px;
  height: 40px;
  padding-left: 10px;
  margin-bottom: 20px;
  width: 100%;
`;

export const ComponentEditor = styled('div')`
  border-radius: 10px;
  margin: 50px;
  width: 500px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const EditorColumn = styled('td')`
  border: 5px solid red;
  border-top: 5px solid red;
`;

export const AppHeader = styled('th')`
  background-color:black;
  border-bottom: 5px solid red;
  color:white;
`;

export const Typography = styled('p')`
line-height:12px;
margin-bottom:5px;

`;
