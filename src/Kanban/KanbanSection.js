import React, { useMemo } from 'react';
import { Flex } from 'rebass';
import { Card, ListGroup } from 'react-bootstrap';
import { KanbanLists } from './KanbanLists';

import { stagesNames } from './helpers';

const KanbanSection = ({ tasks = [], onForward, onBack, onRemove }) => {
  const kanbanTask = useMemo(
    () =>
      tasks.map((kanbanTasks, tkIndex) => {
        return (
          <Card
            style={{ width: '18rem', marginTop: '10px', marginRight: '10px' }}
            key={tkIndex}
          >
            <Card.Body>
              <Card.Title>{stagesNames[tkIndex]}</Card.Title>
              <ListGroup variant="flush">
                <KanbanLists
                  lists={kanbanTasks}
                  onForward={onForward}
                  onBack={onBack}
                  onRemove={onRemove}
                />
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
