import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { node } from 'prop-types';

import { Metaverses } from './Metaverses';

import CheckboxWithLabel from './checkboxwithlabel';

import Counter from './Counter';

function Home() {
  return (
    <div className="Home">
      <Counter/>
      <Metaverses />
      <CheckboxWithLabel label="yea"/>

    </div>
  );
}

export default Home;
