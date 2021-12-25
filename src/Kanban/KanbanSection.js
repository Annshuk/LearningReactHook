import React from 'react';
import { Flex } from 'rebass';
import { Card, ListGroup } from 'react-bootstrap';
import {
  ArrowRightSquareFill,
  ArrowLeftSquareFill,
  XSquareFill,
} from 'react-bootstrap-icons';

import { stagesNames } from './helpers';

const KanbanSection = ({ tasks, onForward, onBack, onRemove }) => {
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
                      <Flex>
                        <button
                          disabled={task.stage === 0}
                          onClick={onBack(task.name)}
                        >
                          <ArrowLeftSquareFill />
                        </button>
                        <button
                          onClick={onForward(task.name)}
                          disabled={task.stage === 3}
                        >
                          <ArrowRightSquareFill />
                        </button>
                        <button>
                          <XSquareFill onClick={onRemove(task.name)} />
                        </button>
                      </Flex>
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
