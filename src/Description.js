import React from 'react';

function Description() {
  return (
    <div className="description" >
      <p>
        This project explores the use of machine learning to predict UFC fight outcomes based on historical data and fighter statistics.
      </p>
      <p>
        The model analyzes key metrics like striking accuracy, takedown success, and other performance factors to estimate the probability of each fighter winning.
      </p>
      <p>
        In addition to the predictions, we provide a comparison with real-time betting odds from several major platforms, offering an interesting benchmark for evaluating the model’s accuracy.
      </p>
      <p>
        Explore the predictions below and see how the model performs!
      </p>

    </div>
  );
}

export default Description;

