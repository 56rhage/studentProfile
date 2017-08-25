import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/routes.js';

//Import stylesheet for top navigation fonts
import Script from '../imports/components/Script';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'));
});
