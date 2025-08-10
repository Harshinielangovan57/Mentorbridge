import React from 'react'
import { ArticlePage } from '../Molecules/ArticlePage'
import currency from '../../Asserts/image-currency.jpg'
import restaurant from '../../Asserts/image-restaurant.jpg'
import plane from '../../Asserts/image-plane.jpg'
import confetti from '../../Asserts/image-confetti.jpg'


export const Articles = () => {
    const ArticleList=[
        {
            image : currency,
            authorName : "By Claire Robinson",
            title : "Receive money in anycurrency with no fees",
            description : "The world is getting smaller and we're becoming more mobile. So ebuogeting Teature why should you be forced to only receive money in a single ..."
        },{
          image : restaurant,
          authorName : "By Witson Hutton",
          title : "Treat yourself without worrying about money",
          description : "Our simple budgeting features allow you to set up and manage your spending limits. That you..."
        },{
          image : plane,
          authorName : "By Witson Hutton",
          title : "Take your Digitalbank card wherever you go",
          description : "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even ..."
        },{
          image : confetti,
          authorName : "By Claire Robinson",
          title : "Our invite-only Beta accounts are now live!",
          description : "After a lot of hard work by the entire team, we're excited to launch our closed beta. It's easy to request an invite through ..."

        }

    ]
    return (
      <div className='d-flex w-100 gap-3'>
      {
        ArticleList.map((item)=> 
          <ArticlePage
            image={item.image}
            authorName={item.authorName}
            title={item.title}
            description={item.description}/>
         )
      }

    </div>
  )
}
