import re


def is_valid_email(email):
    email_regex = r'^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'
    return re.match(email_regex, email) is not None