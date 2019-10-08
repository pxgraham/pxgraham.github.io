import React from 'react';
import './../App.css';

const project = [
    {
      name: 'Sleysin',
      url: 'http://sleysin.com',
    },
    {
      name: 'Event Bites',
      url: 'https://adamdrag.github.io/EventBites/'
    },
    {
      name: 'Gif Search',
      url: 'https://pxgraham.github.io/GiphySearch/'
    },
    {
      name: 'Train Scheduler',
      url: 'https://pxgraham.github.io/Train-Scheduler/'
    },
    {
      name: 'Crystal Collector',
      url: 'https://pxgraham.github.io/unit-4-game/'
    },
    {
      name: 'Hangman',
      url: 'https://pxgraham.github.io/Word-Guess-Game/'
    },
    {
      name: 'Camp Link',
      url: 'https://camplink.herokuapp.com/'
    },
    {
      name: 'Trivia Game',
      url: 'https://pxgraham.github.io/TriviaGame/'
    },
    {
      name: 'Friend Finder',
      url: 'https://px-friend-finder.herokuapp.com/'
    },
    {
      name: 'Web Article Scraper',
      url: 'https://scraper-hw-01.herokuapp.com/'
    }
  ];
function Projects() {
  return (
    <div>
        <div className="project-anchor" id="projects"></div>
        <div className="project-container">
            {
                project.map((p) => {
                return (
                    <div className="project">
                        <div className="project-text">
                            <a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>
                        </div>
                    </div>
                    ) 
                })
            }
        </div>
    </div>
  );
}

export default Projects;
