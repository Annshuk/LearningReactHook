import React, { useState } from 'react';
import { Flex } from 'rebass';
import { Card, ListGroup } from 'react-bootstrap';

import { stagesNames } from './helpers';

const KanbanSection = ({ tasks, onForward, onBack }) => {
  return (
    <Flex>
      {tasks.map((kanbanTasks, tkIndex) => {
        return (
          <Card
            style={{ width: '18rem', marginTop: '10px', marginRight: '10px' }}
            key={tkIndex}
          >
            <Card.Body>
              <Card.Title>{stagesNames[tkIndex]}</Card.Title>
              <ListGroup variant="flush">
                {kanbanTasks?.map((task, taskIndex) => {
                  return (
                    <ListGroup.Item key={`${task.name}${taskIndex}`}>
                      {task.name}
                      <button onClick={onForward}>+</button>
                      <button onClick={onBack}>-</button>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card.Body>
          </Card>
        );
      })}
    </Flex>
  );
};

export { KanbanSection };
