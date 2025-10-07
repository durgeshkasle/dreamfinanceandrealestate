import React from "react";
import { Box, Chip, styled, useTheme, Typography } from "@mui/material";

// ===== Styled Component =====
const Container = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  padding: "100px 24px",
  [theme.breakpoints.down("sm")]: {
    padding: "60px 16px",
  },
}));

const TagCloudWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "40px",
  justifyContent: "center",
}));

// ===== Hardcoded Skills =====
const skillsData = [
  "React.js",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Redux Toolkit",
  "Material UI",
  "Tailwind CSS",
  "TypeScript",
  "Framer Motion",
  "Axios / Fetch",
  "Firebase",
  "Chakra UI",
];

const SkillTagCloud = () => {
  const theme = useTheme();

  return (
    <Container>
        <Box>
            <Typography
                variant="h5"
                sx={{
                fontWeight: 700,
                mb: 3,
                color: theme.palette.primary.light,
                textAlign: "center",
                }}
            >
                Skill Tag Cloud
            </Typography>

            <TagCloudWrapper>
                {skillsData.map((skill) => (
                <Chip
                    key={skill}
                    label={skill}
                    sx={{
                    background: "rgba(255,255,255,0.05)",
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                        transform: "scale(1.1)",
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        color: "#fff",
                    },
                    }}
                />
                ))}
            </TagCloudWrapper>
        </Box>
    </Container>
    
  );
};

export default SkillTagCloud;
