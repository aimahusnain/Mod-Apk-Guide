// pages/api/incrementDownloadCount.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { blogId } = JSON.parse(req.body);

    try {
      // Increment the download count for the specified blog post
      await prisma.download_counts.upsert({
        where: { blog_id: blogId },
        update: {
          count: {
            increment: 1,
          },
        },
        create: {
          blog_id: blogId,
          count: 1, // Initial count
        },
      });

      res.status(200).json({ message: "Download count updated successfully." });
    } catch (error) {
      console.error("Error updating download count:", error);
      res.status(500).json({ error: "Internal server error" });
    } finally {
      // Close the Prisma client connection
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
