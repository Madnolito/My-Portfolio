import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem, Select, FormControl, Fade, Box, InputLabel, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

export const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [fadeIn, setFadeIn] = useState(false);
  const [language, setLanguage] = useState(i18n.language);
  const { t } = useTranslation();

  const handleChange = (event: any) => {
    const lang = event.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang); 
  };

  useEffect(() => {
    setFadeIn(true);
  }, []);



  return (
    <Fade in={fadeIn} timeout={2000}>
      <div>
      <FormControl size='small' sx={{ m: 1, minWidth: 80,  }}>
      <InputLabel
        sx={{
        color: 'white',
        '&.Mui-focused': {
          color: 'rgba(94, 234, 212, 1)'
        }
        }}>{t("language.title")}
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={language}
          onChange={handleChange}
          autoWidth
          label={t('language.label')}
          sx={{
            backgroundColor: "rgba(45, 212, 191, .1)",
            color: 'white',
            borderRadius: "16px" ,
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: '#5AAED4'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(94, 234, 212, 1)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(94, 234, 212, 1)',
            },
            '.MuiSvgIcon-root': {
              color: 'white' // el icono de la flechita
            }
          }}
        >
        <MenuItem value="es">
          <Box display="flex" alignItems="center" gap={0.5}>
            <LanguageIcon />
            <Typography sx={{marginTop: "1.5px"}}>ES</Typography>
          </Box>
        </MenuItem>

        <MenuItem value="en">
          <Box display="flex" alignItems="center" gap={0.5}>
            <LanguageIcon />
            <Typography sx={{marginTop: "1.5px"}}>EN</Typography>
          </Box>
        </MenuItem>
        </Select>
      </FormControl>
    </div>
    </Fade>
  );
};
