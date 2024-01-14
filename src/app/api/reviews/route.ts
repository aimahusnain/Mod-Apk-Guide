// api/reviews.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { content, rating, userId, blogId } = req.body;

    try {
      const newReview = await prisma.review.create({
        data: {
          content,
          rating,
          userId,
          blogId,
        },
      });

      res.status(201).json(newReview);
    } catch (error) {
      console.error("Error saving review:", error);
      res.status(500).json({ error: "Unable to save review." });
    }
  } else if (req.method === "GET") {
    try {
      const reviews = await prisma.review.findMany();
      res.status(200).json(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ error: "Unable to fetch reviews." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
