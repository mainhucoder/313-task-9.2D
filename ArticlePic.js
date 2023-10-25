import React from 'react';
import './ArticlePic.css';
import ArticleAuthor from './articleauthor'; 
import ArticleInfo from './articleinfo'; 
import ArticleName from './articlename'; 
import {faker} from '@faker-js/faker'

const Data = [
    {
      name: faker.name.firstName(),
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores magni, veritatis rem vitae quisquam autem saepe iusto reprehenderit ducimus pariatur vero, corrupti, velit delectus voluptatibus aliquam est! Omnis, velit. ',
      author: faker.name.firstName(),
      imageURL: faker.image.url(),
    },
    {
      name: faker.name.firstName(),
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores magni, veritatis rem vitae quisquam autem saepe iusto reprehenderit ducimus pariatur vero, corrupti, velit delectus voluptatibus aliquam est! Omnis, velit.',
      author: faker.name.firstName(),
      imageURL: faker.image.url(),
    },
    {
      name: faker.name.firstName(),
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores magni, veritatis rem vitae quisquam autem saepe iusto reprehenderit ducimus pariatur vero, corrupti, velit delectus voluptatibus aliquam est! Omnis, velit.',
      author: faker.name.firstName(),
      imageURL: faker.image.url(),
    },
  ];

const ArticlePic = () => {
  return (
    <>
      <div className="articlephotos">
        {Data.map((article, index) => (
          <div key={index} className="imagedesc1">
            <img src={article.imageURL} alt={article.name} className="photo1" />
            <ArticleName name={article.name} />
            <ArticleInfo description={article.description} />
            <hr />
            <ArticleAuthor author={article.author} />
          </div>
        ))}
      </div>
      <div className="buttonbox">
        <button className="button">See All Articles</button>
      </div>
    </>
  );
};

export default ArticlePic;