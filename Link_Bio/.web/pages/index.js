/** @jsxImportSource @emotion/react */


import { Fragment, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import NextHead from "next/head"



export function Link_348be481c51dd5061a723f51bf65ac7c () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}, "width": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.instagram.com/juani_martinez716/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "2em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#d25626"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <img alt={`Instagram`} css={{"width": "2em", "height": "2em", "margin": "0.8em", "padingTop": "0.5em"}} src={`icons/instagram.svg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "alingItems": "start"}} direction={`column`} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "fontWeight": "500", "paddingTop": "0.5em"}}>
  {`Instagram`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C4CB", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "paddingBottom": "0.5em"}}>
  {`Mi perfil personal de Instagram`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_b1af2859e416982a9dbf81fa3617032e () {



  return (
    <RadixThemesLink asChild={true} color={`orange`} css={{"textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/JuaniMartinez716`} passHref={true}>
  {`© 2023-2024 Juan Ignacio Martinez`}
</NextLink>
</RadixThemesLink>
  )
}

export function Link_81a9c27655db99d8c4986c932dfbd0a6 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.youtube.com/@juanignaciomartinez7854`} passHref={true}>
  <img alt={`Youtube`} css={{"width": "1.5em"}} src={`icons/youtube.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_0c434864ca3bba5843f4ff42519b779a () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}, "width": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.twitch.tv/arkantos716`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "2em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#d25626"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <img alt={`Twitch`} css={{"width": "2em", "height": "2em", "margin": "0.8em", "padingTop": "0.5em"}} src={`icons/twitch.svg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "alingItems": "start"}} direction={`column`} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "fontWeight": "500", "paddingTop": "0.5em"}}>
  {`Twitch`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C4CB", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "paddingBottom": "0.5em"}}>
  {`Mi canal de Twitch`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_1a951e95f5a842c5ff60609ccf5d2a57 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.instagram.com/juani_martinez716/`} passHref={true}>
  <img alt={`Instagram`} css={{"width": "1.5em"}} src={`icons/instagram.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_e2d652afb6f20f6d223c014659cd91d5 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}, "width": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/JuaniMartinez716`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "2em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#d25626"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <img alt={`Proyecto 4`} css={{"width": "2em", "height": "2em", "margin": "0.8em", "padingTop": "0.5em"}} src={`icons/github.svg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "alingItems": "start"}} direction={`column`} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "fontWeight": "500", "paddingTop": "0.5em"}}>
  {`Proyecto 4`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C4CB", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "paddingBottom": "0.5em"}}>
  {`Descripcion del Proyecto 4`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_e50627fee87a4e144dfe8e5babe07744 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.x.com/juani_martinez8/`} passHref={true}>
  <img alt={`X`} css={{"width": "1.5em"}} src={`icons/x-twitter.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_cde051992c966678cf39be75c0f0dc10 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}, "width": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/JuaniMartinez716`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "2em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#d25626"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <img alt={`Proyecto 3`} css={{"width": "2em", "height": "2em", "margin": "0.8em", "padingTop": "0.5em"}} src={`icons/github.svg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "alingItems": "start"}} direction={`column`} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "fontWeight": "500", "paddingTop": "0.5em"}}>
  {`Proyecto 3`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C4CB", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "paddingBottom": "0.5em"}}>
  {`Descripcion del Proyecto 3`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Fragment_cf53a535ae2e610a113dd361eb6ac95b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length > 0) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "33px", "right": "33px", "animation": `${pulse} 1s infinite`}} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_b265cb1e46ce131fd54f1d21011fb1c0 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}, "width": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/JuaniMartinez716`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "2em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#d25626"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <img alt={`GitHub`} css={{"width": "2em", "height": "2em", "margin": "0.8em", "padingTop": "0.5em"}} src={`icons/github.svg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "alingItems": "start"}} direction={`column`} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "fontWeight": "500", "paddingTop": "0.5em"}}>
  {`GitHub`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C4CB", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "paddingBottom": "0.5em"}}>
  {`Mi perfil de Github`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_e8cc5f3fbf72bc7bdcc8dac3e0d2376c () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}, "width": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/JuaniMartinez716`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "2em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#d25626"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <img alt={`Proyecto 2`} css={{"width": "2em", "height": "2em", "margin": "0.8em", "padingTop": "0.5em"}} src={`icons/github.svg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "alingItems": "start"}} direction={`column`} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "fontWeight": "500", "paddingTop": "0.5em"}}>
  {`Proyecto 2`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C4CB", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "paddingBottom": "0.5em"}}>
  {`Descripcion del Proyecto 2`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_91c595cda5c2cf65bf1404ca90a9784b () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}, "width": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.x.com/juani_martinez8/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "2em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#d25626"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <img alt={`X`} css={{"width": "2em", "height": "2em", "margin": "0.8em", "padingTop": "0.5em"}} src={`icons/x-twitter.svg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "alingItems": "start"}} direction={`column`} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "fontWeight": "500", "paddingTop": "0.5em"}}>
  {`X`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C4CB", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "paddingBottom": "0.5em"}}>
  {`Mi perfil de X`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_3fc696041c8fddd4749859d5e5778cf7 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}, "width": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.youtube.com/@juanignaciomartinez7854`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "2em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#d25626"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <img alt={`YouTube`} css={{"width": "2em", "height": "2em", "margin": "0.8em", "padingTop": "0.5em"}} src={`icons/youtube.svg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "alingItems": "start"}} direction={`column`} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "fontWeight": "500", "paddingTop": "0.5em"}}>
  {`YouTube`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C4CB", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "paddingBottom": "0.5em"}}>
  {`Mi canal de YouTube`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_69f462793320c4409b0093233b1f81be () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/JuaniMartinez716`} passHref={true}>
  <img alt={`Github`} css={{"width": "1.5em"}} src={`icons/github.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_7c366dffd2113be2f16fe89710bb07bc () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}, "width": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/JuaniMartinez716`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "2em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "&:hover": {"backgroundColor": "#d25626"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <img alt={`Proyecto Gestion de Stock`} css={{"width": "2em", "height": "2em", "margin": "0.8em", "padingTop": "0.5em"}} src={`icons/stock.svg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "alingItems": "start"}} direction={`column`} gap={`1`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "fontWeight": "500", "paddingTop": "0.5em"}}>
  {`Proyecto Gestion de Stock`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C4CB", "fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "paddingBottom": "0.5em"}}>
  {`Echa un vistazo a mi aplicación de gestion de Stock con Python`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Toaster_6e90e5e87a1cac8c96c683214079bef3 () {
  const { resolvedColorMode } = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
const toast_props = {"description": `Check if server is reachable at ${getBackendURL(env.EVENT).href}`, "closeButton": true, "duration": 120000, "id": "websocket-error"};
const [userDismissed, setUserDismissed] = useState(false);
useEffect(() => {
    if (connectErrors.length >= 2) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}, [connectErrors]);

  return (
    <Toaster closeButton={false} expand={true} position={`bottom-right`} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Div_ac2a89ea84667d600a059f034bd91dfe () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={{"position": "fixed", "width": "100vw", "height": "0"}} title={`Connection Error: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}`}>
  <Fragment_cf53a535ae2e610a113dd361eb6ac95b/>
</div>
  )
}

export function Link_ea349cfdf7f16e2d4d1971afc2f0060b () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.twitch.tv/arkantos716`} passHref={true}>
  <img alt={`Twitch`} css={{"width": "1.5em"}} src={`icons/twitch.svg`}/>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <Div_ac2a89ea84667d600a059f034bd91dfe/>
  <Toaster_6e90e5e87a1cac8c96c683214079bef3/>
</Fragment>
  <RadixThemesBox css={{"widht": "100%"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "position": "sticky", "background": "#171F26", "paddingInlineStart": "2em", "paddingInlineEnd": "2em", "paddingTop": "1em", "paddingBottom": "1em", "zIndex": "999", "top": "0"}} direction={`row`} gap={`3`}>
  <RadixThemesBox css={{"fontFamily": "Comfortaa", "--default-font-family": "Comfortaa", "fontWeight": "500", "fontSize": "1.5em"}}>
  <RadixThemesText as={`span`} css={{"color": "#fabe29"}}>
  {`Juanito`}
</RadixThemesText>
  <RadixThemesText as={`span`} css={{"color": "#d25626"}}>
  {`Dev`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center", "width": "100%"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"maxWidth": "550px", "width": "100%", "marginTop": "2em", "marginBottom": "2em", "padding": "2em"}} direction={`column`} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alingItem": "start"}} direction={`column`} gap={`5`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <RadixThemesAvatar css={{"color": "#C3C4CB", "background": "#171F26", "borderWidth": "3px", "borderColor": "#fabe29", "borderRadius": "50%", "marginRight": "0.5em"}} fallback={`JM`} size={`9`} src={`avatar.jpeg`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%", "alingItem": "start"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading css={{"color": "#F1F2F4", "fontFamily": "Poppins, sans-serif", "--default-font-family": "Poppins, sans-serif", "fontWeight": "500"}} size={`8`}>
  {`JuanitoDev`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"marginTop": "0px !important", "color": "#d25626"}}>
  {`juanimartinez@716@gmail.com`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "#C3C4CB", "fontSize": "0.8em"}}>
  {`HOLA 👋 MI NOMBRE ES JUAN IGNACIO MARTINEZ`}
</RadixThemesText>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"paddingTop": "0.8em", "paddingBottom": "0.8em"}} direction={`row`} gap={`6`}>
  <Link_69f462793320c4409b0093233b1f81be/>
  <Link_1a951e95f5a842c5ff60609ccf5d2a57/>
  <Link_e50627fee87a4e144dfe8e5babe07744/>
  <Link_81a9c27655db99d8c4986c932dfbd0a6/>
  <Link_ea349cfdf7f16e2d4d1971afc2f0060b/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"width": "100%"}}>
  <RadixThemesBox>
  <RadixThemesText as={`span`} css={{"fontWeight": "bold", "color": "#fabe29"}}>
  {`25`}
</RadixThemesText>
  <RadixThemesText as={`span`} css={{"fontSize": "0.8em", "color": "#C3C4CB"}}>
  {` Años`}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox>
  <RadixThemesText as={`span`} css={{"fontWeight": "bold", "color": "#fabe29"}}>
  {`4`}
</RadixThemesText>
  <RadixThemesText as={`span`} css={{"fontSize": "0.8em", "color": "#C3C4CB"}}>
  {` Proyectos`}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox>
  <RadixThemesText as={`span`} css={{"fontWeight": "bold", "color": "#fabe29"}}>
  {`+1800`}
</RadixThemesText>
  <RadixThemesText as={`span`} css={{"fontSize": "0.8em", "color": "#C3C4CB"}}>
  {` Seguidores`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em", "color": "#C3C4CB"}}>
  {`
                Soy estudiante de Programacion en la Universidad Tecnologica Nacional en Resistencia, Chaco.
                Esta es mi pagina web con enlaces a mis diferentes redes. Tambien estan los enlaces a algunos
                de mis proyectos personales para que les eches un vistazo. ¡Bienvenidos!
            `}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <RadixThemesHeading css={{"color": "#F1F2F4", "fontFamily": "Poppins, sans-serif", "--default-font-family": "Poppins, sans-serif", "fontWeight": "500", "width": "100%", "paddingTop": "1em"}} size={`7`}>
  {`Mis Proyectos`}
</RadixThemesHeading>
  <Link_7c366dffd2113be2f16fe89710bb07bc/>
  <Link_e8cc5f3fbf72bc7bdcc8dac3e0d2376c/>
  <Link_cde051992c966678cf39be75c0f0dc10/>
  <Link_e2d652afb6f20f6d223c014659cd91d5/>
  <RadixThemesHeading css={{"color": "#F1F2F4", "fontFamily": "Poppins, sans-serif", "--default-font-family": "Poppins, sans-serif", "fontWeight": "500", "width": "100%", "paddingTop": "1em"}} size={`7`}>
  {`Redes Sociales`}
</RadixThemesHeading>
  <Link_b265cb1e46ce131fd54f1d21011fb1c0/>
  <Link_348be481c51dd5061a723f51bf65ac7c/>
  <Link_91c595cda5c2cf65bf1404ca90a9784b/>
  <Link_3fc696041c8fddd4749859d5e5778cf7/>
  <Link_0c434864ca3bba5843f4ff42519b779a/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"marginBottom": "2em", "paddingBottom": "2em", "paddingInlineStart": "2em", "paddingInlineEnd": "2em", "color": "#A3ABB2"}} direction={`row`} gap={`3`}>
  <img alt={`Logotipo de Juan Ignacio Martinez`} css={{"width": "3em", "height": "3em"}} src={`logo.jfif`}/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`column`} gap={`2`}>
  <Link_b1af2859e416982a9dbf81fa3617032e/>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em"}}>
  {`Powered by Juan Ignacio Martinez`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <NextHead>
  <title>
  {`JuanitoDev | Esta es mi pagina web personal`}
</title>
  <meta content={`Aqui encontraras mis proyectos personales y mis diferentes redes sociales.`} name={`description`}/>
  <meta content={`jm.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
