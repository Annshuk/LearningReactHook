import React, { useMemo } from 'react';
import { Flex } from 'rebass';
import { Card, ListGroup } from 'react-bootstrap';
import {
  ArrowRightSquareFill,
  ArrowLeftSquareFill,
  XSquareFill,
} from 'react-bootstrap-icons';

import { stagesNames } from './helpers';

/**
 * KanbanSection
 * to list the kaban
 */
const KanbanSection = ({ tasks = [], onForward, onBack, onRemove }) => {
  const kanbanTask = useMemo(
    () =>
      tasks.map(({ cards, title, id }, taskId) => {
        return (
          <Card
            style={{ width: '18rem', marginTop: '10px', marginRight: '10px' }}
            key={id}
          >
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <ListGroup variant="flush">
                {cards.map(({ name, stage, cid }) => {
                  return (
                    <ListGroup.Item key={cid}>
                      {name}
                      <Flex>
                        <button
                          disabled={stage === 0}
                          onClick={() => onBack(taskId, cid)}
                        >
                          <ArrowLeftSquareFill />
                        </button>
                        <button
                          onClick={() => onForward(taskId, cid)}
                          disabled={stage === 3}
                        >
                          <ArrowRightSquareFill />
                        </button>
                        <button>
                          <XSquareFill onClick={() => onRemove(taskId, cid)} />
                        </button>
                      </Flex>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card.Body>
          </Card>
        );
      }),
    [tasks]
  );

  return <Flex>{kanbanTask}</Flex>;
};

export { KanbanSection };
