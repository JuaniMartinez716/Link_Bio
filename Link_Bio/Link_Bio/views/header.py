import reflex as rx
from link_bio.styles.styles import Size as Size
from link_bio.components.link_icon import link_icon
from link_bio.components.info_text import info_text
import link_bio.views.constants as constants
from link_bio.styles.colors import Color as Color
from link_bio.styles.colors import TextColor as TextColor

def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(
                src = "avatar.jpeg",
                color = TextColor.BODY.value,
                bg = Color.CONTENT.value,
                fallback = "JM",
                size = "9",
                border_width = "3px",
                border_color = Color.PRIMARY.value,
                border_radius = "50%",
                margin_right = Size.SMALL.value
            ),
            rx.vstack(
                rx.heading(
                    "JuanitoDev",
                    size = "8",
                    color = TextColor.HEADER.value
                ),
                rx.text(
                    "juanimartinez@716@gmail.com",
                    margin_top = Size.ZERO.value,
                    color = Color.SECONDARY.value
                ),
                rx.text(
                    "HOLA 👋 MI NOMBRE ES JUAN IGNACIO MARTINEZ",
                    color = TextColor.BODY.value,
                    font_size = Size.MEDIUM.value
                ),
                rx.hstack(
                    link_icon(
                        "icons/github.svg",
                        constants.GITHUB_URL,
                        "Github"
                    ),
                    link_icon(
                        "icons/instagram.svg",
                        constants.INSTAGRAM_URL,
                        "Instagram"
                        ),
                    link_icon(
                        "icons/x-twitter.svg",
                        constants.X_URL,
                        "X"
                        ),
                    link_icon(
                        "icons/youtube.svg",
                        constants.YOUTUBE_URL,
                        "Youtube"
                        ),
                    link_icon(
                        "icons/twitch.svg",
                        constants.TWITCH_URL,
                        "Twitch"
                        ),
                    spacing = "6",
                    padding_y = Size.MEDIUM.value
                ),
                width = "100%",
                aling_item = "start",
                spacing = "2"
            )
        ),
        rx.flex(
            info_text("25", "Años"),
            rx.spacer(),
            info_text("4", "Proyectos"),
            rx.spacer(),
            info_text("+1800", "Seguidores"),
            width = "100%"
        ),
        rx.text(

            f"""
                Soy estudiante de Programacion en la Universidad Tecnologica Nacional en Resistencia, Chaco.
                Esta es mi pagina web con enlaces a mis diferentes redes. Tambien estan los enlaces a algunos
                de mis proyectos personales para que les eches un vistazo. ¡Bienvenidos!
            """,

            font_size = Size.MEDIUM.value,
            color = TextColor.BODY.value,
        ),
        spacing = "5",
        aling_item = "start"
    )