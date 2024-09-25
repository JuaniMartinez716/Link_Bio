import reflex as rx
import link_bio.styles.styles as styles

def title(title: str) -> rx.Component:
    return  rx.heading(
        title,
        style = styles.title_style,
        size = "7"
    )