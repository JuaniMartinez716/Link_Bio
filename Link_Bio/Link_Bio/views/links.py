import reflex as rx
from link_bio.components.link_button import link_button
from link_bio.components.title import title
import link_bio.views.constants as constants

def links() -> rx.Component:
    return rx.vstack(
        title("Mis Proyectos"),

        link_button(
            "Proyecto Gestion de Stock",
            "Echa un vistazo a mi aplicación de gestion de Stock con Python",
            constants.GESTION_STOCK_URL,
            "icons/stock.svg"
        ),
        link_button(
            "Proyecto 2",
            "Descripcion del Proyecto 2",
            constants.PROYECTO_2,
            "icons/github.svg"
        ),
        link_button(
            "Proyecto 3",
            "Descripcion del Proyecto 3",
            constants.PROYECTO_3,
            "icons/github.svg"
        ),
        link_button(
            "Proyecto 4",
            "Descripcion del Proyecto 4",
            constants.PROYECTO_4,
            "icons/github.svg"
        ),

        title("Redes Sociales"),

        link_button(
            "GitHub",
            "Mi perfil de Github",
            constants.GITHUB_URL,
            "icons/github.svg"
        ),
        link_button(
            "Instagram",
            "Mi perfil personal de Instagram",
            constants.INSTAGRAM_URL,
            "icons/instagram.svg"
        ),
        link_button(
            "X",
            "Mi perfil de X",
            constants.X_URL,
            "icons/x-twitter.svg"
        ),
        link_button(
            "YouTube",
            "Mi canal de YouTube",
            constants.YOUTUBE_URL,
            "icons/youtube.svg"
        ),
        link_button(
            "Twitch",
            "Mi canal de Twitch",
            constants.TWITCH_URL,
            "icons/twitch.svg"
        ),
        spacing = "4",
        width = "100%",
    )
        