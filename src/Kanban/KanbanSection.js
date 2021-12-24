import React from 'react';
import { Flex } from 'rebass';
import { Card, ListGroup } from 'react-bootstrap';

const KanbanSection = ({ tasks, stagesNames }) => {
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
