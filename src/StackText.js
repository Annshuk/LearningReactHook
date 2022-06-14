import React, { useState, Fragment } from 'react';

import {
  Container,
  AppHeader,
  EditorColumn,
  ComponentPreview,
  ComponentEditor,
  BulletEditor,
  HeadlineInput,
  DeleteButton,
  BulletInput,
  AddButton,
  Row,
  FormSection,
  Typography,
} from './StackStyled';

const StackText = () => {
  const [bullet, setBullet] = useState(['Lorem Ipsum is simply dummy text']);
  const [headline, setHeadline] = useState('How it works');

  const onChangeHandler = (index, value) => {
    setBullet((bullets) =>
      bullets.map((bullet, i) => (i === index ? value : bullet))
    );
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setBullet((bullets) => [...bullets, 'Lorem Ipsum is simply dummy text']);
  };

  function handleRemoveClick(index) {
    const list = [...bullet];
    list.splice(index, 1);
    setBullet(list);
  }

  return (
    <Container>
      <table>
        <tr>
          <AppHeader>Bullet Point Component</AppHeader>
          <AppHeader>Bullet Point Editor</AppHeader>
        </tr>
        <tr>
          <EditorColumn>
            <ComponentPreview>
              <strong>{headline}</strong>
              <ul>
                {bullet.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </ComponentPreview>
          </EditorColumn>
          <EditorColumn>
            <ComponentEditor>
              <BulletEditor>Edit Component</BulletEditor>

              <FormSection>
                <Typography>Headline</Typography>
                <HeadlineInput
                  type="text"
                  value={headline}
                  onChange={(event) => {
                    setHeadline(event.target.value);
                  }}
                />

                {bullet.map((text, i) => (
                  <Fragment key={`${i}_${text}`}>
                    <Typography>Bullet #{i + 1}</Typography>
                    <Row>
                      <BulletInput
                        placeholder="Enter text"
                        value={text}
                        onChange={(e) => onChangeHandler(i, e.target.value)}
                      />
                      <DeleteButton onClick={() => handleRemoveClick(i)}>
                        Delete
                      </DeleteButton>
                    </Row>
                  </Fragment>
                ))}
                <AddButton onClick={handleAddClick}>
                  <span>+ </span> Add Bullet
                </AddButton>
              </FormSection>
            </ComponentEditor>
          </EditorColumn>
        </tr>
      </table>
    </Container>
  );
};

export { StackText };
