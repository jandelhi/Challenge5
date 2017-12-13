import React from 'react';
import {renderToString} from 'react-dom/server';
import CallToAction from "./src/components/CallToAction.js";

export const data = (context, callback) => {
  const { name } = context.params;
  const { staticPath } = context;

  const renderedApp = renderToString(<CallToAction/>);

  callback(null, {
    staticPath,
    app: renderedApp
  });
};
