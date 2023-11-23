import React from 'react';
import { GridSection, SectionTitle, TaskCard } from '@client/components';
import { useQuery } from '@wasp/queries';
import getTasks from '@wasp/queries/getTasks';

export function HomePage() {
  const { data: tasks, isLoading, error } = useQuery(getTasks);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div>
      <SectionTitle>Recent Tasks</SectionTitle>
      <GridSection>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </GridSection>
      <SectionTitle>Updates</SectionTitle>
      <GridSection>
        {/* Display updates here */}
      </GridSection>
    </div>
  );
}