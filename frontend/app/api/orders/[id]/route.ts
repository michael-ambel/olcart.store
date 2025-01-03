import { NextResponse, NextRequest } from "next/server";
import axios from "axios";
import * as cookie from "cookie";

const BASE_URL = "http://localhost:5000/api/orders";

// Utility Functions
function getAuthToken(req: NextRequest) {
  const cookies = cookie.parse(req.headers.get("cookie") || "");
  const token = cookies.jwt;

  if (!token) {
    throw new Error("Authentication error: please log in again");
  }

  return token;
}

function handleApiError(error: unknown) {
  const message =
    axios.isAxiosError(error) && error.response
      ? error.response.data
      : (error as Error).message;
  return NextResponse.json({ message }, { status: 500 });
}

// Get Specific Order by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const token = getAuthToken(req);
    const { id } = params;
    const response = await axios.get(`${BASE_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    return handleApiError(error);
  }
}

// Update Order Status
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const token = getAuthToken(req);
    const { id } = params;
    const body = await req.json();
    const response = await axios.put(`${BASE_URL}/${id}`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    return handleApiError(error);
  }
}

// Delete Order
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const token = getAuthToken(req);
    const { id } = params;
    const response = await axios.delete(`${BASE_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    return handleApiError(error);
  }
}
