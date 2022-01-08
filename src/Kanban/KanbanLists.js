import React, { useMemo } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Flex } from 'rebass';
import {
  ArrowRightSquareFill,
  ArrowLeftSquareFill,
  XSquareFill,
} from 'react-bootstrap-icons';

const KanbanLists = ({ lists = [], onRemove, onBack, onForward }) => {
  console.log('gu');
  return useMemo(
    () =>
      lists?.map((task, taskIndex) => {
        return (
          <ListGroup.Item key={`${task.name}${taskIndex}`}>
            {task.name}
            <Flex>
              <button disabled={task.stage === 0} onClick={onBack(task.name)}>
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
      }),
    [lists]
  );
};

export { KanbanLists };
