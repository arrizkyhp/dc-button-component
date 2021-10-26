import React from 'react'

export default function Navigation() {
    return (
      <nav className="navigation">
        <h1 className="navigation__logo">
          <a href="https://devchallenges.io/">
            Dev<span>challenges.io</span>
          </a>
        </h1>
        <ul className="navigation__menu">
          <li className="navigation__menu__list">
            <a href="/" target="_blank" rel="noopener noreferrer" data-text="title">
              Colors
            </a>
          </li>
          <li className="navigation__menu__list">
            <a href="/" target="_blank" rel="noopener noreferrer" data-text="title">
              Typography
            </a>
          </li>
          <li className="navigation__menu__list">
            <a href="/" target="_blank" rel="noopener noreferrer" data-text="title">
              Spaces
            </a>
          </li>
          <li className="navigation__menu__list">
            <a href="/" target="_blank" rel="noopener noreferrer" data-text="title">
              Buttons
            </a>
          </li>
          <li className="navigation__menu__list">
            <a href="/" target="_blank" rel="noopener noreferrer" data-text="title">
              Inputs
            </a>
          </li>
          <li className="navigation__menu__list">
            <a href="/" target="_blank" rel="noopener noreferrer" data-text="title">
              Grid
            </a>
          </li>
        </ul>
      </nav>
    );
}
