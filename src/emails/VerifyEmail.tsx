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

export default function VerifyEmail({ username, otp }: Props) {
  return (
    <Html>
      <Head />
      <Body
        style={{
          background: "#0f0f12",
          padding: "40px",
          fontFamily: "Arial",
        }}
      >
        <Container
          style={{
            background: "#18181b",
            borderRadius: "12px",
            padding: "40px",
            maxWidth: "520px",
            margin: "auto",
          }}
        >
          <Heading
            style={{
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Verify your email
          </Heading>

          <Text style={{ color: "#cfcfcf" }}>
            Hello <b>{username}</b>,
          </Text>

          <Text style={{ color: "#cfcfcf" }}>Welcome to TCPioneer.</Text>

          <Text style={{ color: "#cfcfcf" }}>Your verification code is:</Text>

          <Heading
            style={{
              color: "#8b5cf6",
              textAlign: "center",
              fontSize: "42px",
              letterSpacing: "8px",
            }}
          >
            {otp}
          </Heading>

          <Text
            style={{
              color: "#9ca3af",
              textAlign: "center",
            }}
          >
            This code expires in 10 minutes.
          </Text>

          <Button
            href="https://pwn.tcpioneer.org"
            style={{
              background: "#8b5cf6",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              display: "block",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            Open TCPioneer
          </Button>

          <Text
            style={{
              color: "#71717a",
              fontSize: "13px",
              marginTop: "30px",
            }}
          >
            If you didn&apos;t create an account, you can safely ignore this
            email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
