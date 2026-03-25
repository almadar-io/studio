import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import {
  Box,
  VStack,
  Typography,
  Button,
} from "@almadar/ui/marketing";

export default function NotFound(): React.ReactNode {
  return (
    <Layout title="Page not found">
      <Box className="w-full">
        <Box className="site-container py-24">
          <VStack gap="md" align="center" className="min-h-[60vh] justify-center">
            <Typography variant="body1" className="text-[4rem] opacity-30">[ ]</Typography>
            <Typography variant="h1">Nothing here yet</Typography>
            <Typography variant="h3" color="primary">404</Typography>
            <Typography variant="body1" color="muted" className="text-center" style={{ maxWidth: 480 }}>
              This page is a blank canvas. It either doesn't exist
              or hasn't been built yet. Go build something.
            </Typography>
            <Link to="/">
              <Button variant="primary" size="lg">Back to Studio</Button>
            </Link>
          </VStack>
        </Box>
      </Box>
    </Layout>
  );
}
