import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Button,
} from "@react-email/components";

interface Props {
  username: string;
  otp: string;
}

export default function ResetPasswordEmail({ username, otp }: Props) {
  return (
    <Html>
      <Head />
      <Body
        style={{
          background: "#0f0f12",
          padding: "40px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Container
          style={{
            background: "#18181b",
            borderRadius: "12px",
            padding: "40px",
            maxWidth: "520px",
            margin: "auto",
            border: "1px solid #27272a",
          }}
        >
          <Heading
            style={{
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            Reset Your Password
          </Heading>

          <Text style={{ color: "#cfcfcf", fontSize: "16px" }}>
            Hello <b>{username}</b>,
          </Text>

          <Text style={{ color: "#cfcfcf", fontSize: "16px" }}>
            We received a request to reset your password for your TCPioneer
            account.
          </Text>

          <Text style={{ color: "#cfcfcf", fontSize: "16px" }}>
            Enter the following verification code to continue:
          </Text>

          <Heading
            style={{
              color: "#8b5cf6",
              textAlign: "center",
              fontSize: "42px",
              letterSpacing: "8px",
              margin: "32px 0",
            }}
          >
            {otp}
          </Heading>

          <Text
            style={{
              color: "#9ca3af",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            This verification code will expire in <b>10 minutes</b>.
          </Text>

          <Button
            href="https://pwn.tcpioneer.org"
            style={{
              background: "#8b5cf6",
              color: "#ffffff",
              padding: "14px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              display: "block",
              textAlign: "center",
              marginTop: "32px",
              fontWeight: "bold",
            }}
          >
            Open TCPioneer
          </Button>

          <Text
            style={{
              color: "#71717a",
              fontSize: "13px",
              marginTop: "32px",
              lineHeight: "20px",
            }}
          >
            If you didn&apos;t request a password reset, you can safely ignore
            this email. Your password will remain unchanged.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
