import reflex as rx
import datetime
from link_bio.styles.styles import Size as Size
from link_bio.styles.colors import Color as Color
from link_bio.styles.colors import TextColor as TextColor

def footer() -> rx.Component:
    return rx.center(
        rx.hstack(
            rx.image(
                src = "logo.jfif",
                width = Size.VERY_BIG.value,
                height = Size.VERY_BIG.value,
                alt = "Logotipo de Juan Ignacio Martinez",
            ),
            rx.vstack(
                rx.link(
                f"© 2023-{ datetime.date.today().year } Juan Ignacio Martinez",
                href = "https://github.com/JuaniMartinez716",
                is_external = True,
                color_scheme = "orange"
            ),
            rx.text(
                "Powered by Juan Ignacio Martinez",
                font_size = Size.MEDIUM.value 
            ),
            spacing = "2"
            ),
            margin_bottom = Size.BIG.value,
            padding_bottom = Size.BIG.value,
            padding_x = Size.BIG.value,
            color = TextColor.FOOTER.value,
        )
    )