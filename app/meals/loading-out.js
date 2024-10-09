import classes from './loading.module.css'
import React from 'react';
// meals/loading.js (or similar path)
export default function MealsLoadingPage() {
    return <p className={classes.loading}>Fetching meals...</p>;
  }
  