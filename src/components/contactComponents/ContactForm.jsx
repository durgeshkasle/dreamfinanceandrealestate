import React from 'react';
import { Box, Button, CircularProgress, useTheme, Typography, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Controller } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

// ===== Styled Components =====
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': { color: theme.palette.primary.main },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: theme.palette.grey[400] },
    '&:hover fieldset': { borderColor: theme.palette.primary.main },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: '12px 0',
  fontWeight: 600,
  borderRadius: '12px',
  textTransform: 'none',
  // width:"200px",
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'translateY(-2px)',
  },
}));

// Styled Components
const ChipBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  backgroundColor: { xs: 'red', md: 'pink' },
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'red',
    display: 'none',
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '0.80rem',
  padding: '6px 10px',
  borderRadius: '10px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  transition: 'all 0.3s ease',
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    transition: 'color 0.3s ease',
    fontSize: '20px',
  },
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: theme.shadows[6],
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    color: '#fff',
    '& .MuiSvgIcon-root': {
      color: '#fff',
    },
  },
}));

const CompanyInfoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: '16px',
  boxShadow: theme.shadows[4],
  transition: 'all 0.3s ease',
  height: 'fit-content',
  // '&:hover': {
  //   transform: 'translateY(-8px)',
  //   boxShadow: theme.shadows[8],
  //   border: `1px solid ${theme.palette.primary.light}`,
  // },
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  mb: theme.spacing(3),
  '&:last-child': {
    mb: 0,
  },
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  flexShrink: 0,
  '& .MuiSvgIcon-root': {
    fontSize: '20px',
  },
}));

// ===== Component =====
export default function ContactForm({
  control,
  handleSubmit,
  onSubmit,
  isLoading,
  formRef,
  chips,
}) {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: '1200px', margin: 'auto' }}>
      <Box sx={{ 
        display: 'flex', 
        gap: 4, 
        alignItems: 'flex-start',
        flexDirection: { xs: 'column', md: 'row' }
      }}>
        {/* ===== Company Information Section (Left) ===== */}
        <Box sx={{ flex: { xs: '1', md: '0 0 40%' } }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <CompanyInfoContainer>
              <Box sx={{ textAlign: 'left', mb: 4 }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontWeight: 800,
                    mb: 1
                  }}
                >
                  Dream Finance & Real Estate
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                  Your Trusted Financial Partner and Real Estate Services Provider
                </Typography>
              </Box>

              <ContactInfoItem>
                <ContactIcon>
                  <LocationOnIcon />
                </ContactIcon>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Office Address
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6,mb:4 }}>
                    Shop No 23, Ground floor, Evershine Mall,<br />
                    Chincholi Bundar Signal, Malad West -<br />
                    Mumbai 400 062
                  </Typography>
                </Box>
              </ContactInfoItem>

              <ContactInfoItem>
                <ContactIcon>
                  <EmailIcon />
                </ContactIcon>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Email ID
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary',mb:4 }}>
                    dreamfinanceandrealestate@gmail.com
                  </Typography>
                </Box>
              </ContactInfoItem>

              <ContactInfoItem>
                <ContactIcon>
                  <PhoneIcon />
                </ContactIcon>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Contact No
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    8976437111
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    8451921125
                  </Typography>
                </Box>
              </ContactInfoItem>
            </CompanyInfoContainer>
          </motion.div>
        </Box>

        {/* ===== Form Section (Right) ===== */}
        <Box sx={{ flex: { xs: '1', md: '0 0 60%' } }}>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Box
              component="form"
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                backgroundColor: theme.palette.background.paper,
                p: { xs: 3, sm: 4 },
                borderRadius: '16px',
                boxShadow: theme.shadows[4],
                transition: 'all 0.3s ease',
                // '&:hover': {
                //   transform: 'translateY(-8px)',
                //   boxShadow: theme.shadows[8],
                //   border: `1px solid ${theme.palette.primary.light}`,
                // },
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Typography variant="h3">Send Message</Typography>
                <Typography>Let's discuss your financial needs</Typography>
              </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: '15px' }}>
              <Controller
                name="user_name"
                control={control}
                render={({ field, fieldState }) => (
                  <StyledTextField
                    {...field}
                    fullWidth
                    label="Your Name"
                    margin="normal"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />

              <Controller
                name="user_email"
                control={control}
                render={({ field, fieldState }) => (
                  <StyledTextField
                    {...field}
                    fullWidth
                    label="Your Email"
                    margin="normal"
                    // error={!!fieldState.error}
                    // helperText={fieldState.error?.message}
                  />
                )}
              />
            </Box>

            <Controller
              name="phoneNo"
              control={control}
              render={({ field, fieldState }) => (
                <StyledTextField
                  {...field}
                  fullWidth
                  label="Phone Number"
                  margin="normal"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="subject"
              control={control}
              render={({ field, fieldState }) => (
                <StyledTextField
                  {...field}
                  fullWidth
                  label="Subject"
                  margin="normal"
                  // error={!!fieldState.error}
                  // helperText={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="message"
              control={control}
              render={({ field, fieldState }) => (
                <StyledTextField
                  {...field}
                  fullWidth
                  label="Message"
                  margin="normal"
                  multiline
                  rows={4}
                  // error={!!fieldState.error}
                  // helperText={fieldState.error?.message}
                />
              )}
            />

            <StyledButton type="submit" variant="contained" disabled={isLoading} fullWidth>
              {isLoading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Send Message'}
            </StyledButton>

              <ChipBox>
                {chips.map((chip, index) => (
                  <StyledChip key={index} icon={chip.icon} label={chip.label} />
                ))}
              </ChipBox>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
