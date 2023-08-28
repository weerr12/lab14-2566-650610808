"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating value={0} fractions={2} size="lg" />
      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        minRows={3}
      />
      <Button mt="xs" color="orange">
        Submit Review
      </Button>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating size="sm" value={5} fractions={2} readOnly />
      </Group>
      <Text align="center" color="dimmed">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating size="sm" value={4} fractions={2} readOnly />
      </Group>
      <Text align="center" color="dimmed">
        My favourite part is pepperoni
      </Text>
      <Pagination total={20} color="orange" mt="md" position="center" />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 WERASAK MAYER 650610808
      </Text>
    </Container>
  );
}
