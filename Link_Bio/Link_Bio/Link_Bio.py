import reflex as rx
from link_bio.components.navbar import navbar
from link_bio.views.header.header import header
from link_bio.views.links.links import links
from link_bio.components.footer import footer
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size


class State(rx.State):
    pass

def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                links(),
                max_width = styles.MAX_WIDTH,
                width = "100%",
                margin_y = Size.BIG.value,
                padding = Size.BIG.value
            ),
            width = "100%"
        ),
        footer(),
        widht = "100%"
    )

app = rx.App(
    stylesheets = styles.STYLESHEETS,
    style = styles.BASE_STYLE,
)

title = "JuanitoDev | Esta es mi pagina web personal"
description = "Aqui encontraras mis proyectos personales y mis diferentes redes sociales."
preview = "jm.png"

app.add_page(
    index,        
    title = "JuanitoDev | Esta es mi pagina web personal",
    description = "Aqui encontraras mis proyectos personales y mis diferentes redes sociales.",
    image = "jm.ico",
    meta = [
        {"name": "og:type", "content": "website"},
        {"name": "og:title", "content": title},
        {"name": "og:description", "content": description},
        {"name": "og:image", "content": preview},
        {"name": "twitter:card", "content": "summary_large_image"},
        {"name": "twitter:site", "content": "@Juani_Martinez8"},
    ]
)