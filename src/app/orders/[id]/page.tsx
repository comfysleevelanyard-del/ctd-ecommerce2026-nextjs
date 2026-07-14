import axios from "axios";
import { Metadata } from "next";
import {
  CheckCircle2,
  Clock3,
  Package,
  ReceiptText,
  ShoppingBag,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Your Order",
  description: "View your order",
};

const OrdersIdPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/delivery/order-id`,
    {
      orderId: id,
    },
  );

  const order = data.order;
  const cart = order.cart;
  const product = cart.product;

  const unitPrice = product.priceInCents / 100;
  const totalPrice = unitPrice * cart.quantity;

  const isCompleted = order.status?.toLowerCase() === "completed";

  return (
    <main className="min-h-screen bg-muted/20 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <ReceiptText className="h-6 w-6" />
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Order Details
              </h1>

              <p className="mt-1 text-muted-foreground">
                Review the details and current status of your order.
              </p>
            </div>
          </div>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="border-b bg-muted/20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Order ID</p>

                <CardTitle className="mt-1 break-all text-xl">
                  {order.id}
                </CardTitle>
              </div>

              <Badge
                variant={isCompleted ? "default" : "secondary"}
                className="w-fit gap-1 capitalize"
              >
                {isCompleted ? (
                  <CheckCircle2 className="h-3.5 w-3.5" />
                ) : (
                  <Clock3 className="h-3.5 w-3.5" />
                )}

                {order.status || "Pending"}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 pt-6">
            <div className="flex items-start gap-4 rounded-xl border bg-muted/20 p-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border bg-background">
                <Package className="h-7 w-7 text-muted-foreground" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted-foreground">Product</p>

                <h2 className="mt-1 text-xl font-semibold">{product.name}</h2>

                {product.description && (
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {product.description}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border bg-muted/20 p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ShoppingBag className="h-4 w-4" />
                  Quantity
                </div>

                <p className="mt-2 text-2xl font-bold">{cart.quantity}</p>
              </div>

              <div className="rounded-xl border bg-muted/20 p-4">
                <p className="text-sm text-muted-foreground">Price each</p>

                <p className="mt-2 text-2xl font-bold">
                  ${unitPrice.toFixed(2)}
                </p>
              </div>

              <div className="rounded-xl border bg-muted/20 p-4">
                <p className="text-sm text-muted-foreground">Order total</p>

                <p className="mt-2 text-2xl font-bold">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="rounded-xl border bg-muted/10 p-5">
              <p className="text-sm font-medium">Order status</p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {isCompleted
                  ? "This order has been completed."
                  : "This order is still being processed."}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default OrdersIdPage;
