import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.colors import Color as Color
from link_bio.styles.colors import TextColor as TextColor


def link_button(title: str, body: str, url: str, image: str) -> rx.Component:
    return rx.link(
        rx.button(
            rx.hstack(
                rx.image(
                    src = image,
                    width = styles.Size.BIG.value,
                    height = styles.Size.BIG.value,
                    margin = styles.Size.MEDIUM.value,
                    pading_top = styles.Size.SMALL.value,
                    alt = title
                ),
                rx.vstack(
                    rx.text(
                        title,
                        style = styles.button_title_style,
                        padding_top = styles.Size.SMALL.value
                    ),
                    rx.text(
                        body,
                        style = styles.button_body_style,
                        padding_bottom = styles.Size.SMALL.value
                        
                    ),
                    width = "100%",
                    aling_items = "start",
                    spacing = "1"
                )
            )
        ),
        href = url,
        is_external = True,
        width = "100%"
    )