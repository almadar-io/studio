import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { ContentSection, VStack, Typography, Button } from "@almadar/ui/marketing";

export default function NotFound(): React.ReactNode {
  return (
    <Layout title="Page not found">
      <ContentSection padding="lg">
        <VStack gap="md" align="center" className="min-h-[60vh] justify-center">
          <Typography variant="body" className="text-[4rem] opacity-30">[ ]</Typography>
          <Typography variant="h1">Nothing here yet</Typography>
          <Typography variant="h3" color="primary">404</Typography>
          <Typography variant="body" color="muted" className="max-w-[480px] text-center">
            This page is a blank canvas. It either doesn't exist
            or hasn't been built yet. Go build something.
          </Typography>
          <Link to="/">
            <Button variant="primary" size="lg">Back to Studio</Button>
          </Link>
        </VStack>
      </ContentSection>
    </Layout>
  );
}
