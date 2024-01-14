import prisma from '../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { value } = req.body;

  try {
    // Save the rating to the database
    const rating = await prisma.rating.create({
      data: {
        value,
      },
    });

    res.status(200).json({ rating });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving the rating.' });
  }
}
