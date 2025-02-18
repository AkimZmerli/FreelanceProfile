import React from 'react';
// Import your Accordion component here
// For example, if you're using Material-UI, you might import like this:
// import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Sample game data, replace this with your actual data source
const games = [
  { id: 1, title: 'Game 1', description: 'Description for Game 1' },
  { id: 2, title: 'Game 2', description: 'Description for Game 2' },
  // Add more games as needed
];

const GamesPage: React.FC = () => {
  return (
    <div>
      <h1>Games</h1>
      {games.map((game) => (
        <Accordion key={game.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${game.id}-content`}
            id={`panel${game.id}-header`}
          >
            <h2>{game.title}</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>{game.description}</p>
            {/* Add more detailed information about the game here */}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default GamesPage;